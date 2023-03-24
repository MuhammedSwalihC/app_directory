from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from directory_app.models.teacher_model import Teacher, Subject
from directory_app.serializers.teacher_serializer import TeacherSerializer, SubjectSerializer
import pandas as pd


class TeacherListCreateAPIView(APIView):

    def get(self, request):
        teachers = Teacher.objects.all()
        serializer = TeacherSerializer(teachers, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TeacherSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TeacherUpdateAPIView(APIView):

    def get_object(self, _id):
        try:
            teacher = Teacher.objects.get(id=_id)
            return teacher
        except Teacher.DoesNotExist:
            return None

    def get(self, request, _id):
        teacher = self.get_object(_id)
        if teacher is not None:
            serializer = TeacherSerializer(teacher)
            return Response(serializer.data)
        else:
            return Response({'error': 'Teacher not found'}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, _id):
        teacher = self.get_object(_id)
        if teacher is not None:
            serializer = TeacherSerializer(teacher, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'error': 'Teacher not found'}, status=status.HTTP_404_NOT_FOUND)

    def patch(self, request, _id):
        teacher = self.get_object(_id)
        if teacher is not None:
            serializer = TeacherSerializer(teacher, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'error': 'Teacher not found'}, status=status.HTTP_404_NOT_FOUND)
        

def file_upload(file):
    """file upload fucntion"""
    data = file["file"]
    file_extension = file['file'].name.split('.')[-1]
    if file_extension == ".csv":
        dataFrame = pd.read_csv(data)
    elif file_extension == ".xlsx":
        dataFrame = pd.read_excel(data)
    elif file_extension == ".ods":
        dataFrame = pd.read_excel(data, engine="odf")
    return dataFrame


def rename_contact_columns(df):
    """rename the columns"""
    df.rename(
        columns={
            "First Name": "first_name",
            "Last Name": "last_name",
            "Profile picture": "profile_picture",
            "Email Address": "email_address",
            "Phone Number": "phone_number",
            "Subjects taught": "subjects_taught",
        },
        inplace=True,
    )

    df = df.drop(
        ["profile_picture"],
        axis=1,
        errors="ignore",
    )

    return df


class UploadTeacherData(APIView):


    def post(self, request):
        file = request.FILES
        data_frame = file_upload(file)
        data_frame = rename_contact_columns(data_frame)
        serialized_data = TeacherSerializer(data=data_frame.to_dict('records'), many=True)
        if serialized_data.is_valid(raise_exception=True):
            serialized_data.save()
            return Response(serialized_data.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serialized_data.errors, status=status.HTTP_400_BAD_REQUEST)
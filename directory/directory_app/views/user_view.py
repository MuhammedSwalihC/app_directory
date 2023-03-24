from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
from rest_framework import status
# from django.utils.encoding import force_text
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings
from directory_app.serializers.user_serializer import UserLoginSerializer, UserRegisterSerializer
from directory_app.models.user_model import UserModel


# Obtain user model instance
User = get_user_model()

# Creating default JWT  settings
JWT_PAYLOAD_HANDLER = api_settings.JWT_PAYLOAD_HANDLER
JWT_ENCODE_HANDLER = api_settings.JWT_ENCODE_HANDLER


class SuperAdminRegisterView(CreateAPIView):
    """
    View for Superadmin registration.
    """
    permission_classes = []
    serializer_class = UserRegisterSerializer


class UserCreateView(CreateAPIView):
    """
    View for creating new User.
    """
    # permission_classes = [IsAuthenticated]
    permission_classes = []
    serializer_class = UserRegisterSerializer


class UserLoginView(APIView):
    """
    View for User login.
    """
    permission_classes = []

    def post(self, request):
        """post function"""
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        if user.role == 'SA':
            user_serialized = UserRegisterSerializer(user).data
            payload = JWT_PAYLOAD_HANDLER(user)
            token = JWT_ENCODE_HANDLER(payload)
            user_serialized.update({'authToken': token,
                                    'status': True,
                                    "role": "SA"})
            return Response(user_serialized, status=status.HTTP_200_OK)
        elif user.role == 'AD':
            user_serialized = UserRegisterSerializer(user).data
            payload = JWT_PAYLOAD_HANDLER(user)
            token = JWT_ENCODE_HANDLER(payload)
            user_serialized.update({'authToken': token,
                                    'status': True,
                                    "role": "AD"})
            return Response(user_serialized, status=status.HTTP_200_OK)
        elif user.role == 'TE':
            user_serialized = UserRegisterSerializer(user).data
            payload = JWT_PAYLOAD_HANDLER(user)
            token = JWT_ENCODE_HANDLER(payload)
            user_serialized.update({'authToken': token,
                                    'status': True,
                                    "role": "TE"})
            return Response(user_serialized, status=status.HTTP_200_OK)
        elif user.role == 'ST':
            user_serialized = UserRegisterSerializer(user).data
            payload = JWT_PAYLOAD_HANDLER(user)
            token = JWT_ENCODE_HANDLER(payload)
            user_serialized.update({'authToken': token,
                                    'status': True,
                                    "role": "ST"})
            return Response(user_serialized, status=status.HTTP_200_OK)
        return Response(
            {'message': 'Please enter valid credentials'},
            status=status.HTTP_400_BAD_REQUEST
            )
    
    
    def get(self, request):
        users = UserModel.objects.all()
        serializer = UserRegisterSerializer(users, many=True)
        return Response(serializer.data)
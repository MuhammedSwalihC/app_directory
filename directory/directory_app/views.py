from typing import List


from directory_app.views.user_view import  UserCreateView, SuperAdminRegisterView,UserLoginView
from directory_app.views.teacher_view import TeacherListCreateAPIView, TeacherUpdateAPIView, UploadTeacherData

__all__: List[str] = [
    "UserCreateView",
    "SuperAdminRegisterView",
    "UserLoginView",
    "TeacherListCreateAPIView",
    "TeacherUpdateAPIView",
    "UploadTeacherData",
]
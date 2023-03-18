from django.urls import path
from directory_app.views.user_view import (
    UserCreateView, SuperAdminRegisterView, UserLoginView
)
from directory_app.views.teacher_view import TeacherListCreateAPIView, TeacherUpdateAPIView, UploadTeacherData
urlpatterns = [
    path('register_super_admin/', SuperAdminRegisterView.as_view(), name='register_super_admin'),
    path('add_user/', UserCreateView.as_view(), name='add_user'),
    path('login/', UserLoginView.as_view(), name='login'),
   path('teachers/', TeacherListCreateAPIView.as_view()),
    path('teachers/<int:id>/', TeacherUpdateAPIView.as_view()),
    path('upload/', UploadTeacherData.as_view())
]
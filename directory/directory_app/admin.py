from django.contrib import admin
from directory_app.models.user_model import UserModel
from directory_app.models.teacher_model import Teacher, Subject

admin.site.register(UserModel)
admin.site.register(Teacher)
admin.site.register(Subject)


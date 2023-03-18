""" global models for app directory """
from typing import List

from directory_app.models.user_model import UserModel
from directory_app.models.teacher_model import Teacher, Subject

__all__: List[str] = [
    "UserModel",
    "Teacher",
    "Subject"
]
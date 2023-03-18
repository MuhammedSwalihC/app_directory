from datetime import datetime, timedelta
from django.db import models
import jwt
from django.conf import settings


class UserModel(models.Model):
    """
    Model representing Users.
    """
    id = models.AutoField(primary_key=True)
    role_choices = (
        ('SA', 'Super Admin'),
        ('AD', 'Admin'),
        ('TE', 'Teacher'),
        ('ST', 'Student')
    )
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=255, blank=True, null=True,
                                unique=True)
    role = models.CharField(choices=role_choices, max_length=2)

    def __str__(self):
        return f'{self.id} {self.email} {self.role}'
    
    @property
    def token(self):
        """
        Method to generate token.
        Return: string
        """
        payload = {
            "user_id": self.pk,
            "exp": datetime.utcnow()
                    + timedelta(days=30),
            "iat": datetime.utcnow(),
        }

        return jwt.encode(
            payload, settings.SECRET_KEY,
            algorithm='HS256'
        ).decode('utf-8')
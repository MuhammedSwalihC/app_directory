from django.db import models
from directory_app.models.user_model import UserModel


class Teacher(models.Model):
    """
    Model representing a teacher in a school.
    """
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    profile_picture = models.ImageField(upload_to='teachers/profile_pictures/', null=True, blank=True)
    email_address = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)
    subjects_taught = models.ManyToManyField('Subject')
    
    def __str__(self):
        return f'<Teacher {self.first_name} {self.last_name}>'


class Subject(models.Model):
    """
    Model representing subject.
    """
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'<Subject {self.name}>'
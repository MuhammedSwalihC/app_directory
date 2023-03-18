from rest_framework import serializers
from directory_app.models.teacher_model import Teacher, Subject


class SubjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subject
        fields = ['id', 'name']


class TeacherSerializer(serializers.ModelSerializer):
    profile_picture = serializers.ImageField(max_length=None, use_url=True, required=False)
    subjects_taught = serializers.SlugRelatedField(many=True, queryset=Subject.objects.all(), slug_field='name')

    class Meta:
        model = Teacher
        fields = ['id', 'first_name', 'last_name', 'profile_picture',
                  'email_address', 'phone_number', 'number_room',
                  'subjects_taught']
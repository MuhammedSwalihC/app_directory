from rest_framework import serializers
from directory_app.models.user_model import UserModel
from django.contrib.auth import authenticate


class UserRegisterSerializer(serializers.ModelSerializer):
    token = serializers.CharField(read_only=True)

    class Meta:
        model = UserModel
        fields = ['id', 'email', 'username', 'role', "token"]

    def save(self, **kwargs):
        user = UserModel(
            email=self.validated_data.get('email'),
            role=self.validated_data.get('role'),
            username=self.validated_data.get('username'),
        )
        user.save()
        return user
    # def create(self, validated_data):
    #     """
    #     Create User instance.
    #     :param validated_data: Dict
    #     :return: Object
    #     """
    #     user = UserModel.objects.create_user(**validated_data)
    #     return user
    

class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate(self, data):
        email = data.get('email', None)

        if not email:
            raise serializers.ValidationError(f'Email is required to login.{email}')

        # user = authenticate(email=email)
        user = UserModel.objects.get(email=email)

        if not user:
            raise serializers.ValidationError(
                                        {'error': [f'Invalid Email or Password {email}']}
                                    )

        data['user'] = user

        return data


# Generated by Django 4.1.7 on 2023-03-24 18:17

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Subject",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("name", models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name="UserModel",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("email", models.EmailField(max_length=254, unique=True)),
                (
                    "username",
                    models.CharField(
                        blank=True, max_length=255, null=True, unique=True
                    ),
                ),
                (
                    "role",
                    models.CharField(
                        choices=[
                            ("SA", "Super Admin"),
                            ("AD", "Admin"),
                            ("TE", "Teacher"),
                            ("ST", "Student"),
                        ],
                        max_length=2,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Teacher",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("first_name", models.CharField(max_length=50)),
                ("last_name", models.CharField(max_length=50)),
                (
                    "profile_picture",
                    models.ImageField(
                        blank=True, null=True, upload_to="teachers/profile_pictures/"
                    ),
                ),
                ("email_address", models.EmailField(max_length=254, unique=True)),
                ("phone_number", models.CharField(max_length=15)),
                ("subjects_taught", models.ManyToManyField(to="directory_app.subject")),
            ],
        ),
    ]
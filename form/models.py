from django.db import models


class Form(models.Model):
    username = models.CharField(max_length=25)
    name = models.CharField(max_length=100)
    skills = models.TextField()
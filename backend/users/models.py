from django.db import models

# Create your models here.
class Users(models.Model):
  username = models.CharField("Username", max_length=20)
  email = models.EmailField()
  
  def __str__(self):
      return self.name
  
from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Sensor(models.Model):
    temp = models.FloatField()
    humid = models.FloatField()
    watertank = models.IntegerField()
    time = models.DateTimeField(auto_now_add=True)
    humid = models.FloatField()
    watertank = models.IntegerField()
    time = models.DateTimeField(auto_now_add=True)
    machine = models.ForeignKey('Machines', related_name = "machines", null = False, on_delete = models.CASCADE)  


class Machines(models.Model):
    name = models.CharField(max_length = 150)
    owner = models.ManyToManyField(User, related_name ="machine")


class Config(models.Model):
    inicillum = models.IntegerField()
    horesllum = models.IntegerField()
    minutsbomba = models.IntegerField()
    horarefill = models.IntegerField()
    tempmax = models.IntegerField()
    tempmin = models.IntegerField()
    phmax = models.IntegerField()
    phmin = models.IntegerField()
    time = models.DateTimeField(auto_now_add=True)
    machine = models.ForeignKey('Machines', related_name = "machines2", null = False, on_delete = models.CASCADE)  


class MachineState(models.Model):
    llum = models.BooleanField()
    bomba_aigua = models.BooleanField()
    bomba_nutri1 = models.BooleanField()
    bomba_nutri2 = models.BooleanField()
    bomba_oxigen = models.BooleanField()

    time = models.DateTimeField(auto_now_add=True)
    machine = models.ForeignKey('Machines', related_name = "machines3", null = False, on_delete = models.CASCADE)  



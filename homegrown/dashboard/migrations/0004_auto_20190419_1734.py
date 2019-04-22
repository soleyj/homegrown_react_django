# Generated by Django 2.1.7 on 2019-04-19 17:34

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('dashboard', '0003_auto_20190418_1022'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='machines',
            name='owner',
        ),
        migrations.AddField(
            model_name='machines',
            name='owner',
            field=models.ManyToManyField(null=True, related_name='machine', to=settings.AUTH_USER_MODEL),
        ),
    ]

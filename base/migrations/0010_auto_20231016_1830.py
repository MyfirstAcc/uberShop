# Generated by Django 3.1.4 on 2023-10-16 15:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0009_auto_20231016_1208'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='category',
        ),
        migrations.AlterField(
            model_name='typeproduct',
            name='name',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]

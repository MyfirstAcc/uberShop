# Generated by Django 3.1.4 on 2023-10-16 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0010_auto_20231016_1830'),
    ]

    operations = [
        migrations.AddField(
            model_name='typeproduct',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to=''),
        ),
    ]

# Generated by Django 5.0.1 on 2024-02-11 10:12

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('warehouse', '0006_alter_order_item'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='date',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]

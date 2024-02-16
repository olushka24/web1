from django.db import models

def get_product_image(instance, filename):
    return f'product/{filename}'

class Products(models.Model): 
    name = models.CharField(max_length=50) 
    description = models.CharField(max_length=100)
    price = models.IntegerField() 
    photo = models.ImageField(upload_to=get_product_image, blank=True, null=True)

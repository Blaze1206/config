from django.db import models

# Create your models here.




class Good(models.Model):
    CATEGORY_CHOICES = (
    ("1","Szórakoztató elektronika"),
    ("2","Háztartási gép"),
    ("3","Televízió"),
    ("4","Mobiltelefon"),
    ("5","Fényképezőgép"),
    ("6","Nincs beállítva")
)
    is_visible = models.BooleanField(default=True)
    item_code = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    amount = models.IntegerField(default=0)
    price_in = models.IntegerField()
    price_out = models.IntegerField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES,default=6)
    discount = models.IntegerField(default=0)
    photo = models.ImageField(upload_to="goods",blank=True)
   
    def __str__(self):
        return self.name
    
class Order(models.Model):
    is_visible = models.BooleanField(default=True)
    item = models.ForeignKey(Good,on_delete=models.PROTECT, related_name="ordered_item")
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    e_mail = models.EmailField(max_length=255)
    phone = models.CharField(max_length=20)
    amount = models.IntegerField(default=0)
    price = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
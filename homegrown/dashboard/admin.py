from django.contrib import admin

# Register your models here.


from dashboard.models import Machines,Sensor,Config, MachineState

admin.site.register(Machines)
admin.site.register(Sensor)
admin.site.register(Config)
admin.site.register(MachineState)
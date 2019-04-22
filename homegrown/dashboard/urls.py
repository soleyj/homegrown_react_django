from django.urls import path
from rest_framework import routers
from dashboard import views
from .api import SensorViewSet,MachineViewSet,ConfigViewSet,StateViewSet

router = routers.DefaultRouter()
router.register('api/sensor',SensorViewSet,'sensor')
router.register('api/machine',MachineViewSet,'machine')
router.register('api/config',ConfigViewSet,'config')
router.register('api/state',StateViewSet,'state')

urlpatterns = router.urls

app_name = 'basic_app'






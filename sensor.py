import adafruit_dht
import board
import json
from time import sleep

#Initialize DHT11 sensor
dht_device = adafruit_dht.DHT11(board.D4)


data = {}
while True:
    try:
        temp = dht_device.temperature
        temp = round((temp * 1.8) + 32, 2)
        humidity = dht_device.humidity
        
        data['temp'] = temp
        data['humidity'] = humidity
        
        with open("data.json", "w") as outfile: #Writes sensor data to JSON file
            json.dump(data, outfile)            #Puts python dictionary into JSON file as JSON string
            
        
        print("Temperature: {:.2f} Humidity: {}% ".format(temp, humidity))
        
    except RuntimeError as error:
        print(error.args[0])
        sleep(2.0)
        continue
    except Exception as error:
        dht_device.exit()
        raise error
        
    print(data)
    sleep(2.0)
    
    


import pymysql
import csv

lvHOST = 'localhost'
lvUSER = 'root'
lvPASSWORD = ''
lvDATABASE = 'cuentaclientes'

conexion = pymysql.connect(host=lvHOST,user=lvUSER,passwd=lvPASSWORD,db=lvDATABASE)

cursor = conexion.cursor()

with open('c:/web/libro8.csv', newline='') as File:  
    reader = csv.reader(File)
    next(reader)
    for row in reader:
        cursor.execute('insert into cuentasxcobrar values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)', row )


conexion.commit()
conexion.close()
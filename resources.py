from flask import Flask
from flask import Flask,render_template, request
from flask_mysqldb import MySQL
import datetime
import json
# import jwt
# send email imports
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import random


flask_mysqldb = MySQL()

app = Flask(__name__)


def getVaccineCenters():  # Name of the method
    cur = flask_mysqldb.connection.cursor()  # SQL instance
    cur.execute('''SELECT * FROM vaccincentersmaster''')  # execute an SQL statment
    rv = cur.fetchall()  # Retreive all rows returend by the SQL statment
    Results = []
    for row in rv:  # Format the Output Results and add to return string
        Result = {}
        Result['id'] = row[0]
        Result['name'] = row[1]
        Result['address'] = row[2]
        Result['timing'] = row[3]
        Result['images'] = row[4]
        Result['facilities'] = row[5]
        Results.append(Result)
    response = {'status': 200, 'responseMessage': 'Success', 'body': Results}
    retData = app.response_class(
        response=json.dumps(response),
        status=200,
        mimetype='application/json'
    )
    return retData  # Return the data in a string format


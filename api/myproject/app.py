from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
from flask import Flask,render_template, request
from flask_mysqldb import MySQL
import datetime
import hashlib
import json
import user
import resources


flask_mysqldb = MySQL()
app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={r"/": {"origins": "*"}})

def initDB():
    app.config['MYSQL_USER'] = 'root'
    app.config['MYSQL_PASSWORD'] = 'root@123'
    app.config['MYSQL_DB'] = 'covidvaccinedb'
    app.config['MYSQL_HOST'] = 'localhost'  # for now
    flask_mysqldb.init_app(app)

initDB()

@app.route("/")
def initApp():
    return("Welcome to Covid Vaccine Center App API Page")


@app.route("/resource/centersList", methods=['GET'])  # get all Vaccine  centers
def getAllVaccineCenters():
  return resources.getVaccineCenters()



@app.route("/users/register", methods=['POST'])
@cross_origin()
def index():
    if request.method == 'POST':
          req_json = request.json
          token = "29347skdfhsdhf"
          username = req_json['username']
          email = req_json['email']
          pwd = req_json['password']
          contact = req_json['contact']
          modifiedDate = datetime.datetime.now()
          currentDate = datetime.datetime.now()
          # Password encryption with Salt and hash
          salt = hashlib.md5(pwd.encode())
          pwd = salt.hexdigest()
          userData = [
               token, username, email, pwd, contact, modifiedDate, currentDate
          ]
    return user.addUser(userData)

@app.route("/login", methods=['POST'])  # Login user
def userLogin():
    if request.method == 'POST':
        req_json = request.json
        email = req_json['email']
        pwd = req_json['password']
        salt = hashlib.md5(pwd.encode())
        pwd = salt.hexdigest()
    return user.login(email, pwd)

@app.route("/vaccineCenterlogin", methods=['POST'])  # Login user
def vaccineCenterlogin():
    if request.method == 'POST':
        req_json = request.json
        email = req_json['email']
        pwd = req_json['password']
    return user.vaccineCenterlogin(email, pwd)


@app.route("/users/checkotp", methods=['POST'])  # Check OTP
def chkOTP():
    if request.method == 'POST':
        req_json = request.json
        otpCode = req_json['otp_code']
    return user.checkOTP(otpCode)

@app.route("/bookslot", methods=['POST'])  # Login user
def userBookSlot():
    if request.method == 'POST':
        req_json = request.json
        user_name = req_json['user_name']
        user_email_id = req_json['user_email_id']
        vaccine_center_id = req_json['vaccine_center_id']
        currentDate = datetime.datetime.now()
        slotData = [user_name, user_email_id,vaccine_center_id,currentDate]
    return user.bookslot(slotData)

@app.route("/appointmentUser", methods=['POST'])  # appointment user
def getAppointmetUser():
    if request.method == 'POST':
        req_json = request.json
        vaccine_center_id = req_json['id']
    return user.getAppointmet(vaccine_center_id)

@app.route("/verifyVaccineToken", methods=['POST'])  # appointment user
def checkVaccineToken():
    if request.method == 'POST':
        req_json = request.json
        id = req_json['id']
        user_token_number = req_json['user_token_number']
    return user.vaccineToken(id,user_token_number)

@app.route("/getVaccinatedUser", methods=['POST'])  # appointment user
def getVaccinatedUser():
    if request.method == 'POST':
        req_json = request.json
        vaccine_center_id = req_json['id']
    return user.getVaccinated(vaccine_center_id)


if __name__ == "__main__":
    app.run()  # Run the flask app at port 8080

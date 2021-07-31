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

# app.config['SECRET_KEY'] = 'vaccinCenter_app@2021'

def addUser(userData):
    token, username, email, pwd, contact, modifiedDate, currentDate = userData
    ran_number = random.randint(1000, 9999)     # random 4 digit number

    cur = flask_mysqldb.connection.cursor()  # SQL instance
    s = '''INSERT INTO user(user_token, user_password, user_name, user_email_id, user_contact, otp_code, modified_date, created_date ) VALUES('{}','{}', '{}', '{}', '{}', '{}', '{}', '{}');'''.format(
        token, pwd, username , email, contact, ran_number, modifiedDate, currentDate)
    try:

        cur.execute(s)
        flask_mysqldb.connection.commit()

        # Send OTP email to registered User
        subject = "Welcome to Covid Vaccine Centers - Verify your email address"
        body = f"""
            <p>Hi {username},</p>
            <p>Enter the 4 digit OTP code we sent to you via email to continue</p>
            <h1 style='letter-spacing: 1rem'><b>{ran_number}</b></h1>
            <p>Regards,<br/>Covid Vaccine Admin Team,<br/>Dublin 1.</p>
        """
        send_email('bijendragaur9146@gmail.com',
                   'Qwerty@123', email, subject, body)

        return {'status': 200, 'responseMessage': 'Success'}, 200
    except Exception as e:
        return {'status': 500, 'responseMessage': str(e)}, 500

def login(email, pwd):
    # print('username, pwd = ', username, pwd)

    if len(email.strip()) <= 0:
        return {'status': 500, 'responseMessage': 'Invalid Username. Please try again!'}, 500

    if len(pwd.strip()) <= 0:
        return {'status': 500, 'responseMessage': 'Invalid Password. Please try again!'}, 500

    # encoded = jwt.encode({'email': email, 'exp': datetime.datetime.utcnow(
    # ) + datetime.timedelta(minutes=20)}, app.config['SECRET_KEY'])
    try:
        cur = flask_mysqldb.connection.cursor()  # SQL instance
        cur.execute(
            f"""SELECT user_role_id, user_token, user_name, user_email_id, user_contact FROM user WHERE user_email_id = '{email}' and user_password = '{pwd}'""")
        rv = cur.fetchall()  # Retreive all rows returend by the SQL statment
        Results = []

        if (len(rv) != 0):
            for row in rv:  # Format the Output Results and add to return string
                Result = {}
                Result['user_role_id'] = row[0]
                # Result['user_token'] = str(encoded)
                Result['user_name'] = row[2]
                Result['user_email_id'] = row[3]
                Result['user_contact'] = row[4]
                Results.append(Result)

            response = {'status': 200,
                        'responseMessage': 'Success', 'body': Results}
            retData = app.response_class(
                response=json.dumps(response),
                status=200,
                mimetype='application/json'
            )
            return retData  # Return the data in a string format
        else:
            return {'status': 500, 'responseMessage': 'Unauthorized User. Please try again!'}, 500
    except Exception as e:
        return {'status': 500, 'responseMessage': str(e)}, 500

def getAppointmet(vaccine_center_id):

    if len(vaccine_center_id.strip()) <= 0:
        return {'status': 500, 'responseMessage': 'Invalid Vaccine Center Cridential. Please try again!'}, 500


    # encoded = jwt.encode({'email': email, 'exp': datetime.datetime.utcnow(
    # ) + datetime.timedelta(minutes=20)}, app.config['SECRET_KEY'])
    try:
        cur = flask_mysqldb.connection.cursor()  # SQL instance
        cur.execute(
            f"""SELECT * FROM user_appointment WHERE fk_vaccine_center_id = '{vaccine_center_id}' and vaccination_status = "False" """)
        rv = cur.fetchall()  # Retreive all rows returend by the SQL statment
        Results = []

        if (len(rv) != 0):
            for row in rv:  # Format the Output Results and add to return string
                Result = {}
                Result['id'] = row[0]
                Result['user_name'] = row[1]
                Result['user_email_id'] = row[2]
                Results.append(Result)

            response = {'status': 200,
                        'responseMessage': 'Success', 'body': Results}
            retData = app.response_class(
                response=json.dumps(response),
                status=200,
                mimetype='application/json'
            )
            return retData  # Return the data in a string format
        else:
            return {'status': 404, 'responseMessage': 'No Patients Found. Please try again!'}, 404
    except Exception as e:
        return {'status': 500, 'responseMessage': str(e)}, 500

def checkOTP(otpCode):
    if len(otpCode.strip()) <= 0:
        return {'status': 500, 'responseMessage': 'OTP is invalid. Please try again!'}, 500

    cur = flask_mysqldb.connection.cursor()  # SQL instance
    cur.execute(
        f"""SELECT user_role_id FROM user WHERE otp_code = '{otpCode}'""")
    rv = cur.fetchall()  # Retreive all rows returend by the SQL statment
    Results = []

    if (len(rv) != 0):
        for row in rv:  # Format the Output Results and add to return string
            Result = {}
            Result['user_role_id'] = row[0]
            Results.append(Result)

        response = {'status': 200,
                    'responseMessage': 'Success'}
        retData = app.response_class(
            response=json.dumps(response),
            status=200,
            mimetype='application/json'
        )
        return retData  # Return the data in a string format
    else:
        return {'status': 500, 'responseMessage': 'OTP is invalid. Please try again!'}, 500

def vaccineCenterlogin(email, pwd):
    # print('username, pwd = ', username, pwd)

    if len(email.strip()) <= 0:
        return {'status': 500, 'responseMessage': 'Invalid Username. Please try again!'}, 500

    if len(pwd.strip()) <= 0:
        return {'status': 500, 'responseMessage': 'Invalid Password. Please try again!'}, 500

    # encoded = jwt.encode({'email': email, 'exp': datetime.datetime.utcnow(
    # ) + datetime.timedelta(minutes=20)}, app.config['SECRET_KEY'])
    try:
        cur = flask_mysqldb.connection.cursor()  # SQL instance
        cur.execute(
            f"""SELECT * FROM vaccine_centers_account WHERE email_address = '{email}' and password = '{pwd}'""")
        rv = cur.fetchall()  # Retreive all rows returend by the SQL statment
        Results = []

        if (len(rv) != 0):
            for row in rv:  # Format the Output Results and add to return string
                Result = {}
                Result['id'] = row[0]
                # Result['user_token'] = str(encoded)
                Result['name'] = row[1]
                Result['email_address'] = row[2]
                Results.append(Result)

            response = {'status': 200,
                        'responseMessage': 'Success', 'body': Results}
            retData = app.response_class(
                response=json.dumps(response),
                status=200,
                mimetype='application/json'
            )
            return retData  # Return the data in a string format
        else:
            return {'status': 500, 'responseMessage': 'Unauthorized User. Please try again!'}, 500
    except Exception as e:
        return {'status': 500, 'responseMessage': str(e)}, 500

def bookslot(userData):
    username, email, vaccine_center_id, currentDate = userData
    ran_number = random.randint(1000, 9999)     # random 4 digit number

    cur = flask_mysqldb.connection.cursor()  # SQL instance
    s = '''INSERT INTO user_appointment(user_name, user_email_id, user_token_number, fk_vaccine_center_id, created_date ) VALUES('{}','{}', '{}', '{}', '{}');'''.format(
        username , email, ran_number, vaccine_center_id, currentDate)
    try:

        cur.execute(s)
        flask_mysqldb.connection.commit()

        # Send OTP email to registered User
        subject = "Your Vaccine Token Number"
        body = f"""
            <p>Hi {username},</p>
            <p>Please provide this 4 digit token number to the vaccination center </p>
            <h1 style='letter-spacing: 1rem'><b>{ran_number}</b></h1>
            <p>Regards,<br/>Covid Vaccine Admin Team,<br/>Dublin 1.</p>
        """
        send_email('bijendragaur9146@gmail.com',
                   'Qwerty@123', email, subject, body)

        return {'status': 200, 'responseMessage': 'Success'}, 200
    except Exception as e:
        return {'status': 500, 'responseMessage': str(e)}, 500


def vaccineToken(id,user_token_number):
  if len(user_token_number.strip()) <= 0:
        return {'status': 500, 'responseMessage': 'Token Number is invalid. Please try again!'}, 500
  cur = flask_mysqldb.connection.cursor()
  cur.execute(
    f"""UPDATE user_appointment SET vaccination_status = "True" WHERE id = '{id}' and user_token_number = '{user_token_number}'""")
  cur.connection.commit()
  if(cur.rowcount > 0):
     response = {'status': 200,
                    'responseMessage': 'Success'}
     retData = app.response_class(
          response=json.dumps(response),
          status=200,
          mimetype='application/json'
      )
     return retData  # Return the data in a string format
  else:
      return {'status': 500, 'responseMessage': 'No Row effected. Somthing went wrong!'}, 500


def getVaccinated(vaccine_center_id):

    if len(vaccine_center_id.strip()) <= 0:
        return {'status': 500, 'responseMessage': 'Invalid Vaccine Center Cridential. Please try again!'}, 500

    # encoded = jwt.encode({'email': email, 'exp': datetime.datetime.utcnow(
    # ) + datetime.timedelta(minutes=20)}, app.config['SECRET_KEY'])
    try:
        cur = flask_mysqldb.connection.cursor()  # SQL instance
        cur.execute(
            f"""SELECT * FROM user_appointment WHERE fk_vaccine_center_id = '{vaccine_center_id}' and vaccination_status = "True" """)
        rv = cur.fetchall()  # Retreive all rows returend by the SQL statment
        Results = []

        if (len(rv) != 0):
            for row in rv:  # Format the Output Results and add to return string
                Result = {}
                Result['id'] = row[0]
                Result['user_name'] = row[1]
                Result['user_email_id'] = row[2]
                Result['created_date'] = row[5]
                Result['vaccination_status'] = row[6]
                Results.append(Result)

            response = {'status': 200,
                        'responseMessage': 'Success', 'body': Results}
            retData = app.response_class(
                response=json.dumps(response),
                status=200,
                mimetype='application/json'
            )
            return retData  # Return the data in a string format
        else:
            return {'status': 404, 'responseMessage': 'No Patients Found. Please try again!'}, 404
    except Exception as e:
        return {'status': 500, 'responseMessage': str(e)}, 500



def send_email(gmailUser, gmailPassword, recipient, subject, body):
    msg = MIMEMultipart()
    msg['From'] = f'"Covid Vaccine Admin Support "'
    msg['To'] = recipient
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'html'))

    try:
        mailServer = smtplib.SMTP('smtp.gmail.com', 587)
        mailServer.ehlo()
        mailServer.starttls()
        mailServer.ehlo()
        mailServer.login(gmailUser, gmailPassword)
        mailServer.sendmail(gmailUser, recipient, msg.as_string())
        mailServer.close()
        print('Email sent!')
    except LookupError:
        print('Something went wrong...', LookupError)

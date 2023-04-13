from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/submit_form', methods=['POST'])
def submit_form():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']
    print(f'Name: {name}\nEmail: {email}\nMessage: {message}')
    return 'Form submitted successfully!'

if __name__ == '__main__':
    app.run(debug=True)

from flask import *

app = Flask(__name__)

@app.route("/<name>")
def products(name):
    return render_template("products.html", n = name)

@app.route("/search", methods = ['POST'])
def search():
    return request.form

if __name__ == "__main__":
    app.run(debug = True, port = 3000)
from flask import *

app = Flask(__name__)

@app.route("/<name>")

def products(name):
    return render_template("products.html", n = name)

# def electronics(name):
#     return render_template("electronics.html", n = name)

if __name__ == "__main__":
    app.run(debug = True)
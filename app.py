from flask import Flask, render_template, request, jsonify
from fractions import Fraction

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        # Get the user input from the HTML form
        expression = request.form.get('expression')
        
        # Evaluate the expression using Python's eval function
        result = eval(expression)
        
        # Get the selected output format (fraction or decimal)
        output_format = request.form.get('output-format')
        
        if output_format == 'fraction':
            # If the user selected "fraction," convert the result to a Fraction object
            result = Fraction(result).limit_denominator()
            result_str = f'{result.numerator}/{result.denominator}'
        else:
            # If the user selected "decimal," format the result to the thousandth place
            result_str = f'{result:.3f}'
        
        # Return the result as a JSON response
        return jsonify({'result': result_str})
    except Exception as e:
        # Handle any errors (e.g., invalid input) and return an error message
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)

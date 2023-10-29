Feature: Adding a Product

Pharmacy employees can enter product information with the following data:

Code (unique within the pharmacy).
Name.
Description.
Price.
All the data is mandatory.

@tag1
Scenario: Adding a Valid Product Entry
	Given that I input the code 1234  
	And   that I input the name 'Shampoo-Bella' 
	And   that I input the description 'Para el Cabello', 
	And   that I input the price  50.50,
	When  I call the "Create" controller,
	Then  the result  'Su producto se agregó de forma correcta'

	#
	#| Code     | Name              | Description            | Price     | myList                                  | Result                                      |
	#| -------- | ----------------- | ---------------------- | --------- | --------------------------------------- | ------------------------------------------- |
	#| 1234     | Shampoo-Bella     | Para el Cabello        | 50.50     | [Shampoo-Bella]                         | 'Your product has been added to the list'   |
	#| 1255     | Crema para manos  | Tersa y Suave          | 150       | [Shampoo-Bella,Crema para Manos]        | 'Your product has been added to the list'   |
	
	@tag2
	Scenario: Adding a InValid Product with code empty
	Given that I input the code ''  
	And   that I input the name 'Shampoo-Bella' 
	And   that I input the description 'Para el Cabello', 
	And   that I input the price  50.50,
	When  I call the "Create" controller,
	Then  the result  "El código de producto no puede ser vacío'

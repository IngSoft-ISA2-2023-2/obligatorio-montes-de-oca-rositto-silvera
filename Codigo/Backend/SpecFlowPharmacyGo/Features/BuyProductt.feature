Feature: Featu

A short summary of the feature

@tag1
Scenario Outline: Adding a Valid Purchase with Purchase Details to the System
    Given that I input the code <ProductCode>
    And that I input the name '<ProductName>'
    And that I input the description '<ProductDescription>'
    And that I input the price <ProductPrice>
    When I press the "Make purchase" button
    Then the result '<PurchaseResult>'

    Examples:
    | ProductCode | ProductName    | ProductDescription | ProductPrice | PurchaseResult          |
    | 1234        | Shampoo-Bella  | Para el Cabello    | 50.50        | Compra realizada con exito |
    | 1255        | Crema para manos | Tersa y Suave    | 150          | Compra realizada con exito |

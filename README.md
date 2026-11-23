# CvSU Mini Store (Product Catalog)

A mini product catalog built with React and Vite for DCIT26 Laboratory Exercise 3.

## Guide Questions

**1. What is the difference between props and state?**
Props are data that a parent gives to a child component. State is data that a component keeps and can change by itself.

**2. Why can a child component not modify the props it receives?**
Props are read-only. The data belongs to the parent, so only the parent can change it. This keeps the data flow clear and predictable.

**3. How does the onAddToCart callback allow data to flow from child to parent?**
The parent passes a function down as a prop. When the button is clicked, the child calls that function and gives it the product title. The function runs in the parent, so the parent receives the data.

**4. Why is the key prop required when rendering a list with .map()?**
React uses the key to identify each item in the list. If keys are missing or duplicated, React can mix up items, show warnings, and display wrong content when the list updates.

**5. What does the children prop allow you to do that a normal prop does not?**
It lets you place your own content, such as a badge or other elements, between the opening and closing tags of a component, instead of passing a single value.
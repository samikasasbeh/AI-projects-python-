while True:
    age = float(input("Enter an age in human years (or a negative number to quit): "))
    if age < 0:
        break
    elif age <= 2:
        dog_years = age * 10.5
    else:
        dog_years = 21 + (age - 2) * 4
    print(f"A {age}-year-old human is equivalent to a {dog_years:.1f}-year-old dog!")

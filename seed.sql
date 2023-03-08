CREATE TABLE people (
    id SERIAL PRIMARY KEY,
    first_name varchar(20),
    last_name varchar(20),
    age int,
    gender varchar(1),
    nationality varchar(20),
    location varchar(20), 
    occupation varchar(20),
    religion varchar(20)
);

INSERT INTO people (first_name, last_name, age, gender, nationality, location, occupation, religion) VALUES ('John', 'Smith', 32, 'M', 'United States', 'Seattle', 'Software Engineer', 'Atheist'), ('Jane', 'Doe', 24, 'F', 'Australia', 'Sydney', 'Architect', 'Christian'), ('Marco', 'Ricci', 62, 'M', 'Italy', 'Venice', 'Restaurant Owner', 'Muslim'), ('Emma', 'Fischer', 77, 'F', 'Germany', 'Berlin', 'Radio Host', 'Buddhism');
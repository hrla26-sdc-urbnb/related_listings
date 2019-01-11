drop database if exists similar_listings;
create database similar_listings;
\c similar_listings;
create table properties (
    id INT PRIMARY KEY, 
    link_id INT, 
    bed_num INT, 
    specs VARCHAR(255), 
    pic VARCHAR(255), 
    description VARCHAR(255), 
    cost VARCHAR(255), 
    stars INT, 
    ratings_num INT, 
    favorite INT,
    createdAt  VARCHAR(255),
    updatedAt VARCHAR(255)
);
\COPY properties(id, link_id, bed_num, specs, pic, description, cost, stars, ratings_num, favorite, createdAt, updatedAt) FROM '../../../data.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX link_id_index ON properties (link_id)
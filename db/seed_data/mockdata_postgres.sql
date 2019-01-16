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

\COPY properties(id, link_id, bed_num, specs, pic, description, cost, stars, ratings_num, favorite, createdAt, updatedAt) FROM '/home/ubuntu/mount_point/data.csv' DELIMITER ',' CSV HEADER;


\COPY properties(id, link_id, bed_num, specs, pic, description, cost, stars, ratings_num, favorite, createdAt, updatedAt) FROM '../../../home/ubuntu/data.csv' DELIMITER ',' CSV HEADER;
CREATE INDEX link_id_index ON properties (link_id);
CREATE INDEX link_id_index ON properties USING hash (link_id);
CREATE INDEX link_id_index ON properties USING gin(link_id);

CREATE INDEX description_index ON properties(description);
CREATE INDEX description_index ON properties USING gin(description);
CREATE INDEX description_index ON properties USING gin(to_tsvector('english', description));
CREATE INDEX test_gin_idx ON test USING gin (to_tsvector('english', the_text));
select * from properties where newcol @@ to_tsquery('Tub');
select * from properties where newcol @@ to_tsquery('Spacious');


ALTER TABLE properties ADD COLUMN newcol tsvector;
UPDATE properties SET newcol = to_tsvector(description);
CREATE INDEX description_index ON properties USING gist(newcol);

DELETE FROM properties where link_id = 5;

UPDATE properties SET description = 'Very good house' WHERE link_id = 1;
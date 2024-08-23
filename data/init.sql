CREATE TABLE positions (
	id SERIAL PRIMARY KEY,
	slug TEXT UNIQUE,
	short_name TEXT,
	name TEXT NOT NULL,
	href TEXT,
	start_year INT NOT NULL,
	start_month INT NOT NULL,
	end_year INT,
	end_month INT,
	position TEXT,
	tasks JSON
);

CREATE TABLE links (
	id SERIAL PRIMARY KEY,
	href TEXT,
	position_id SERIAL,
	FOREIGN KEY (position_id) REFERENCES positions(id)
);
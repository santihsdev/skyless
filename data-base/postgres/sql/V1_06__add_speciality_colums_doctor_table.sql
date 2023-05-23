ALTER TABLE bd_schema.doctor
ADD COLUMN speciality_id VARCHAR(10);

ALTER TABLE bd_schema.doctor
ADD CONSTRAINT fk_doctor_speciality
FOREIGN KEY (speciality_id)
REFERENCES bd_schema.speciality(id);

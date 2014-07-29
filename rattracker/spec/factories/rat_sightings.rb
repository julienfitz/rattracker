# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :rat_sighting do
    latitude ""
    longitude ""
    created_date ""
    location_type, "MyString"
    zip ""
    address "MyString"
  end
end

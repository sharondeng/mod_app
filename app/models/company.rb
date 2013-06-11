class Company < ActiveRecord::Base
  attr_accessible :locations_attributes
  attr_accessible :name
  has_many :locations, :dependent => :destroy
  accepts_nested_attributes_for :locations, :reject_if => lambda{ |a| a[:number].blank?}, :allow_destroy => true
end

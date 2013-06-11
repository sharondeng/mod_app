class Location < ActiveRecord::Base
  belongs_to :company
  attr_accessible :number, :address
end

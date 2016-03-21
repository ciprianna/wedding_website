class Guests < ActiveRecord::Base
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates_uniqueness_of :first_name, scope: :last_name
  validates :attending, presence: true
  validates :total_guests, presence: true

end

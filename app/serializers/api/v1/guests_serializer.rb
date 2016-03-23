class Api::V1::GuestsSerializer < Api::V1::BaseSerializer
  attributes :first_name, :last_name, :attending,  :total_guests

end

class Instrument < ApplicationRecord
    has_many :musician_instruments
    
    has_many :users,
        through: :musician_instruments

end

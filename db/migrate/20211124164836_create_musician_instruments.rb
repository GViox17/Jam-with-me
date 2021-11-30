class CreateMusicianInstruments < ActiveRecord::Migration[6.1]
  def change
    create_table :musician_instruments do |t|
      t.integer :instrument_id
      t.integer :user_id

    end
  end
end

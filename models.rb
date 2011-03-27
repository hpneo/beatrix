# Loads all the models

$:.unshift File.join(File.dirname(__FILE__),'models/')
Dir.glob("models/*.rb*").each {|file| require file.gsub(".rb","")}

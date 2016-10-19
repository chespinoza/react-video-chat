package main

import (
	"flag"
	"log"
	"net/http"

	"github.com/chespinoza/ape"
)

var Conf Config

func init() {
	var configFile string
	flag.StringVar(&configFile, "configFile", "main.conf", "Config file name")
	Conf = Config{}
	if err := Conf.Get(configFile); err != nil {
		log.Fatal(err)
	}
}
func main() {
	server := ape.New()
	server.Router.ServeFiles("/*filepath", http.Dir(Conf.StaticFilesPath))
	addr := Conf.GetAddr()
	log.Println("Running server on ", addr)
	server.RunHTTP(addr, 3600, 3600)
}

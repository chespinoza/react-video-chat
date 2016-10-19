package main

import (
	"fmt"

	"github.com/chespinoza/goconf"
)

//Config type to store configuration params
type Config struct {
	Host            string
	Port            int
	StaticFilesPath string
}

//Get retrieve the configuration from config file
func (c *Config) Get(fileName string) error {
	cf, err := conf.ReadConfigFile(fileName)
	if err != nil {
		return fmt.Errorf("Error reading config file [%s]:%s", fileName, err.Error())
	}
	if c.Host, err = cf.GetString("main", "host"); err != nil {
		return err
	}
	if c.Port, err = cf.GetInt("main", "port"); err != nil {
		return err
	}
	if c.StaticFilesPath, err = cf.GetString("main", "static_files"); err != nil {
		return err
	}
	return nil
}

//GetAddr join host and port into addr string
func (c *Config) GetAddr() string {
	if c.Port != 0 {
		return fmt.Sprintf("%s:%d", c.Host, c.Port)
	}
	//default
	return ":8080"
}

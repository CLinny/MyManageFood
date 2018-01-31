sap.ui.define([
	] , function () {
		"use strict";

		return {

			/**
			 * Rounds the number unit value to 2 digits
			 * @public
			 * @param {string} sValue the number string to be rounded
			 * @returns {string} sValue with 2 digits rounded
			 */
			numberUnit : function (sValue, sCurrency) {
				if (!sValue) {
					return "";
				}
				return sCurrency;
			},
			
			detailNumberUnit : function (sValue, sCurrency) {
				if(!sValue){
					return "";
				}
				return sValue + " " + sCurrency;
			},
			
			packageFormatter : function (iPartitionMeasure, sPartitionMeasureUnit, iPartitionPrice, sPartitionWeight) {
				//iPartitionMeasure = 100 
				//sPartitionMeasureUnit = "g"
				//iPartitionPrice = 1.99
				//sPartittionWeight = "EUR"
				
				//100g / 1.99 Euro
				//1.99 Euro
				
				if(iPartitionPrice){
					var sConcatPrice = iPartitionPrice + " " + sPartitionWeight;
					if(iPartitionMeasure){
						return iPartitionMeasure + sPartitionMeasureUnit + " / " + sConcatPrice;
					}
					return sConcatPrice;
				}
				return "";
				
			}

		};

	}
);
using System;
namespace Isracart.Data.Services
{
    public class CalcService : ICalcService
    {
        public float GetResult(float firstInput, float secondInput, string calcAction)
        {
            float result = 0;

            switch (calcAction)
            {
                case "+":
                    result = firstInput + secondInput;
                    break;
                case "-":
                    result = firstInput - secondInput;
                    break;
                case "/":
                    result = firstInput / secondInput;
                    break;
                case "*":
                    result = firstInput * secondInput;
                    break;
                default:
                    result = 0;
                    break;
            }

            
            return result;
        }
    }
}

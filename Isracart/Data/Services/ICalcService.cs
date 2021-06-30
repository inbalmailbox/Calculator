using System;
namespace Isracart.Data.Services
{
    public interface ICalcService
    {
        float GetResult(float firstInput, float secondInput, string calcAction);
    }
}

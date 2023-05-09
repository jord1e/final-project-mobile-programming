package nl.jrdie.quotebookapp.graphql;

import graphql.language.StringValue;
import graphql.schema.*;

import java.time.OffsetDateTime;
import java.time.format.DateTimeParseException;

public class DateScalar implements Coercing<OffsetDateTime, String> {

    public static final GraphQLScalarType SCALAR =
            GraphQLScalarType.newScalar().name("Date").coercing(new DateScalar()).build();

    private DateScalar() {
    }

    @Override
    public String serialize(Object dataFetcherResult) throws CoercingSerializeException {
        String ofValue = String.valueOf(dataFetcherResult);
        try {
            return ofValue;
        } catch (DateTimeParseException e) {
            throw new CoercingSerializeException(e);
        }
    }

    @Override
    public OffsetDateTime parseValue(Object input) throws CoercingParseValueException {
        if (input instanceof OffsetDateTime localDateTime) {
            return localDateTime;
        }
        try {
            if (input instanceof String string) {
                return OffsetDateTime.parse(string);
            }
        } catch (DateTimeParseException ignored) {
        }
        throw new CoercingParseValueException(
                "Input " + input + " could not be converted to a ISO 8601 date");
    }

    @Override
    public OffsetDateTime parseLiteral(Object input) throws CoercingParseLiteralException {
        if (input instanceof StringValue stringValue) {
            try {
                return OffsetDateTime.parse(stringValue.getValue());
            } catch (DateTimeParseException e) {
                throw new CoercingParseLiteralException(e);
            }
        }
        throw new CoercingParseLiteralException("Input literal " + input + " not a LocalDate");
    }
}